import { getData } from "@/services/profiles";
import ModalUsers from "../../../component/modal/ModalUsers";

type Patient = {
  _id: string;
  email: string;
};
export default async function addDetailProfile(props: any) {
  const { params } = props;
  const data: Patient = await getData(
    `${process.env.NEXTAUTH_URL}/api/topics/?_id=` + params._id,
  );

  return (
    <>
      <ModalUsers />
    </>
  );
}
