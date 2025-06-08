import {
  Button,
  DatePicker,
  DatePickerInput,
  FileUploader,
  Form,
  InlineNotification,
  Stack,
  TextArea,
  TextInput,
} from "@carbon/react";

import {
  Controller,
  useForm,
  type RegisterOptions,
  type SubmitHandler,
} from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTES } from "../routing/routes";
import styles from "./UserForm.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  about: string;
  avatar: string; // base64 string
}

const validators: Record<keyof FormData, RegisterOptions<FormData>> = {
  firstName: {
    required: "First Name is required",
  },
  lastName: {
    required: "Last Name is required",
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Email is invalid",
    },
  },
  phone: {
    required: "Phone is required",
    pattern: {
      value:
        /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)[-.\s]?(\d{1,4}[-.\s]?){1,5}\d{1,4}$/,
      message: "Phone is invalid",
    },
  },
  birthday: {
    required: "Birthday is required",
  },
  about: {
    required: "About is required",
  },
  avatar: { required: "Avatar is required" },
};

const defaultFormValues: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthday: "",
  about: "",
  avatar: "",
};

const UserForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    control,
    trigger,
  } = useForm<FormData>({
    defaultValues: defaultFormValues,
  });

  const avatar = watch("avatar");
  const userLanguage = navigator.language || "en";

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    sessionStorage.setItem("userData", JSON.stringify(data));

    await trigger();
    navigate(ROUTES.USER_PROFILE);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("avatar", { message: "File must be an image" });
        return;
      }
      if (file.size > 1024 * 1024) {
        setError("avatar", {
          message: "Image size must be less than 1MB",
        });
        setValue("avatar", "");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("avatar", reader.result as string);
        clearErrors("avatar");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack className={styles.container} gap={6}>
      <h2>User Information Form</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={5}>
          <TextInput
            id="first-name-input"
            labelText="First Name*"
            type="text"
            invalidText={errors.firstName?.message}
            invalid={!!errors.firstName?.message}
            {...register("firstName", validators.firstName)}
          />
          <TextInput
            id="last-name-input"
            labelText="Last Name*"
            type="text"
            invalidText={errors.lastName?.message}
            invalid={!!errors.lastName?.message}
            {...register("lastName", validators.lastName)}
          />
          <TextInput
            id="email-input"
            labelText="Email*"
            type="email"
            invalidText={errors.email?.message}
            invalid={!!errors.email?.message}
            {...register("email", validators.email)}
          />
          <TextInput
            id="phone-input"
            labelText="Phone*"
            type="tel"
            placeholder="+123456789"
            invalidText={errors.phone?.message}
            invalid={!!errors.phone?.message}
            {...register("phone", validators.phone)}
          />
          <Controller
            name="birthday"
            control={control}
            rules={validators.birthday}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <DatePicker
                dateFormat="d/m/Y"
                datePickerType="single"
                value={value}
                onChange={(_, currentDate) => {
                  onChange(currentDate);
                }}
                locale={userLanguage}
              >
                <DatePickerInput
                  id="birthday-input"
                  placeholder="dd/mm/yyyy"
                  labelText="Birthday*"
                  invalid={!!error}
                  invalidText={error?.message}
                />
              </DatePicker>
            )}
          />
          <TextArea
            id="about-input"
            labelText="About"
            rows={2}
            invalidText={errors.about?.message}
            invalid={!!errors.about?.message}
            {...register("about", validators.about)}
          />
          <div>
            <hr />
          </div>
          <div className={styles["avatar-section"]}>
            <Controller
              name="avatar"
              control={control}
              rules={validators.avatar}
              render={({ field }) => (
                <FileUploader
                  labelTitle="Upload avatar"
                  labelDescription="Only images up to 1MB"
                  buttonLabel="Add files"
                  filenameStatus="edit"
                  accept={["image/*"]}
                  {...field}
                  onChange={handleAvatarChange}
                  onDelete={() => clearErrors("avatar")}
                  id="avatar-input"
                />
              )}
            />
            {errors.avatar && (
              <InlineNotification
                kind="error"
                title="Upload Error"
                subtitle={errors.avatar.message}
                hideCloseButton
              />
            )}
            {avatar && (
              <img
                src={avatar}
                alt="Avatar preview"
                className={styles["avatar"]}
              />
            )}
          </div>
          <div>
            <hr />
          </div>
          <div>
            <Button type="submit" className={styles["submit-form-btn"]}>
              Submit
            </Button>
          </div>
        </Stack>
      </Form>
    </Stack>
  );
};

export default UserForm;
