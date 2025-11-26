import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/948ec46a-1175-493f-9543-c8e6a1a908e6`);

  return res.json();
};

export default getBillboard;
