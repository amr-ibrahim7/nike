import type { NextApiRequest, NextApiResponse } from "next";

// const getProducts = async (
//   sort: "a-z" | "z-a" | "price-asc" | "price-desc" = "a-z",
//   limit: number = 9,
//   searchQuery: string = "",
//   categoryQuery: string = ""
// ): Promise<any[]> => {
//   const url = `https://data-kcy6.onrender.com/data`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const data = await response.json();
//   return data;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const data = await getProducts();
//       res.status(200).json({ data });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

export const getProducts = async (
  sort: "a-z" | "z-a" | "price-asc" | "price-desc" = "a-z",
  limit: number = 9,
  searchQuery: string = "",
  categoryQuery: string = ""
): Promise<any[]> => {
  const url = `https://data-kcy6.onrender.com/data`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await getProducts();
      res.status(200).json({ data });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res
      .status(405)
      .json({ error: "Product data are requird or validation error!" });
  }
}
