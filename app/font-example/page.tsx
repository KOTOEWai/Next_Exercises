
import { Bokor } from "next/font/google";
const bokorFont = Bokor({
    subsets:['latin'],
    weight:'400'
})
export default function page() {
    return (
        <div>
            <div className={bokorFont.className}>
                <h1 >Bokor Font</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ea velit eius quia, sint quas ad. Est nisi dolores, voluptas incidunt provident, deserunt assumenda, tenetur quas deleniti dolorem sequi nostrum?
                </p>
            </div>
            <h1>Font Example</h1>
        </div>
    );
}