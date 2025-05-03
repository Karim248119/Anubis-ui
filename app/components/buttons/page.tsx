import CodePreview from "@/components/CodePreview";
import { Button1, Button1Code } from "@/demo/buttons/Btn1";
import { ShareButtons, ShareButtonsCode } from "@/demo/buttons/ShareButtons";
import { Button2, Button2Code } from "@/demo/buttons/Btn2";
import { Button3, Button3Code } from "@/demo/buttons/Btn3";
import { Button4, Button4Code } from "@/demo/buttons/Btn4";
import { Button5, Button5Code } from "@/demo/buttons/Btn5";
import { Button6, Button6Code } from "@/demo/buttons/Btn6";
import { Button7, Button7Code } from "@/demo/buttons/Btn7";
import { Button8, Button8Code } from "@/demo/buttons/Btn8";
import { Button9, Button9Code } from "@/demo/buttons/Btn9";
import {
  ContactButtons,
  ContactButtonsCode,
} from "@/demo/buttons/ContactButtons";
import React from "react";
import { Button10, Button10Code } from "@/demo/buttons/Btn10";
import { Button11, Button11Code } from "@/demo/buttons/Btn11";
import { Button12, Button12Code } from "@/demo/buttons/Btn12";
import { Button13, Button13Code } from "@/demo/buttons/Btn13";
import { Button14, Button14Code } from "@/demo/buttons/Btn14";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <CodePreview
        code={Button1Code}
        component={<Button1>Button 1</Button1>}
        background="#fff"
      />
      <CodePreview
        code={Button2Code}
        component={<Button2>Button 2</Button2>}
        background="#eeeeee"
      />
      <CodePreview
        code={Button3Code}
        component={<Button3>Button 3</Button3>}
        background="#031228"
      />
      <CodePreview
        code={ContactButtonsCode}
        component={<ContactButtons />}
        background="#222222"
      />
      <CodePreview
        code={Button5Code}
        component={<Button5>Button 5</Button5>}
        background="#eeeeee"
      />
      <CodePreview
        code={Button6Code}
        component={<Button6>Button 6</Button6>}
        background="#eeeeee"
      />
      <CodePreview
        code={Button7Code}
        component={<Button7>Button 7</Button7>}
        background="#222222"
      />
      <CodePreview
        code={Button8Code}
        component={<Button8>Button 8</Button8>}
        background="#eeeeee"
      />
      <CodePreview
        code={Button9Code}
        component={<Button9>Button 9</Button9>}
        background="#f8f8f8"
      />
      <CodePreview
        code={Button10Code}
        component={<Button10>Button 10</Button10>}
        background="#222222"
      />
      <CodePreview
        code={Button11Code}
        component={<Button11>Button 11</Button11>}
      />
      <CodePreview
        code={Button12Code}
        component={<Button12>Button 12</Button12>}
        background="#031228"
      />{" "}
      <CodePreview
        code={Button13Code}
        component={<Button13>Button 13</Button13>}
        background="#031228"
      />
      <CodePreview
        code={Button14Code}
        component={<Button14>Button 14</Button14>}
        background="#000"
      />
      <CodePreview
        code={ShareButtonsCode}
        component={<ShareButtons />}
        background="#f8f8f8"
      />
      <CodePreview
        code={Button4Code}
        component={<Button4>Button 4</Button4>}
        background="#eeeeee"
      />
    </div>
  );
}
