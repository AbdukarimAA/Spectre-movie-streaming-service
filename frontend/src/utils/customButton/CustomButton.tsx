import { styled, Theme } from "@mui/material/styles";
import { Button, SxProps } from "@mui/material";
import {useState} from "react";

const StyledButton = styled(Button)<{ left: number; top: number }>`
  position: relative;
  background: rgb(4, 4, 20);
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(83, 22, 113) 100%);
  width: 200px;
  height: 60px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  overflow: hidden;

  &:before {
    content: "";
    left: ${({left}) => left}px;
    top: ${({top}) => top}px;
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0.3;
    background: radial-gradient(circle closest-side, #ffffff, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2ms ease, height 0.2ms ease;
  }

  &:hover:before {
    color: red;
    width: 200px;
    height: 200px;
  }
`;


export const SubmitButton = (props: {text: string, children?: React.ReactNode; sx?: SxProps<Theme>; className: any }) => {
    const [hoverStyle, setHoverStyle] = useState({
        left: 0,
        top: 0,
    });

    const handleMouseMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const left = e.clientX - rect.left;
        const top = e.clientY - rect.top;

        setHoverStyle({ left, top });
    };

    return (
        <StyledButton
            left={hoverStyle.left}
            top={hoverStyle.top}
            type="submit"
            variant="contained"
            sx={props.sx}
            onMouseMove={handleMouseMove}
        >
            <span>{props.text}</span>
        </StyledButton>
    );
};