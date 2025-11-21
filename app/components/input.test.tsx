import { describe,it ,expect} from "vitest";
import Input from './Input'
import { render ,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Input Component",()=>{
    it("render input & button",()=>{
        render(<Input/>)
        expect(screen.getByTestId("input")).toBeInTheDocument()
        expect(screen.getByTestId("submit-btn")).toBeInTheDocument()
    });
    it("output is the same text inputted", async()=>{
        render(<Input/>)
        const inputElement = screen.getByTestId("input") ;
        const buttonElement = screen.getByTestId("submit-btn");
        const outputElement = screen.getByTestId("output");
       
        await userEvent.type(inputElement,"Hello World");
        await userEvent.click(buttonElement);

        expect(outputElement).toHaveTextContent("Hello");
       expect(outputElement.textContent).toBe("Hello World");
    });
})