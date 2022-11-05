import { useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  async function test() {
    const response = await api.get("/comics");
    console.log(response.data);
  }
  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <p>dasjdsaj</p>
    </div>
  );
}
