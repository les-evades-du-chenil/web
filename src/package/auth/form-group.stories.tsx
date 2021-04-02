import FormGroup, { IFormGroupProps } from "./form-group";
export default {
  title: "UI/user/layout/header/headerMobile",
  component: FormGroup,
};

export const Default = (args: IFormGroupProps) => (
  <FormGroup type={args.type} name={args.name} id={args.id}>
    label
  </FormGroup>
);
