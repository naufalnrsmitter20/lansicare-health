import { error } from "console";

const GetErrorMessage = (type: string) => {
  switch (type) {
    case "minLength":
      return "Password harus lebih dari 8 karakter";
    case "required":
      return "mohon mengisi field";
  }
};
const FormError = ({ error }: any) => {
  if (!error) {
    return <></>;
  }

  const { type } = error;
  const message = GetErrorMessage(type);
  return (
    <div>
      <p className=" text-red-600 text-xs">{message}</p>
    </div>
  );
};
export default FormError;
