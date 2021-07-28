import { useState } from "react";
import "./style.css";

export default function InputURL() {
   const [url, setURL] = useState("");
   return (
      <div className={"box-inputURL"}>
         <form>
            <input type="text" className={"box-inputURL"} value={url} onChange={(e) => setURL(e.target.value)} />
            <button className={"submit"} type="submit">
               Generate Link
            </button>
         </form>
      </div>
   );
}
