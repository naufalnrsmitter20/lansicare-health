import UserModel from "@/src/models/userModel";
import connect from "@/src/utils/db";
import { NextResponse } from "next/server";

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  name: string;
  email: string;
  role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;

  await connect();
  const oldUser = await UserModel.findOne({ email: body.email });
  if (oldUser)
    return NextResponse.json(
      { error: "Email is Already Exists" },
      { status: 422 },
    );
  const user = await UserModel.create({ ...body });
  return NextResponse.json({
    user: {
      id: user._id.toString(),
      name: user.fullname,
      email: user.email,
      role: user.role,
    },
  });
};
