import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { toggleMode } from "../../../redux/features/darkModeSlice";

const DarkModeToggle = () => {
  const dispatch = useAppDispatch();

  return (
    <input type="checkbox" className="" onClick={() => dispatch(toggleMode())} />
  )
}

export default DarkModeToggle