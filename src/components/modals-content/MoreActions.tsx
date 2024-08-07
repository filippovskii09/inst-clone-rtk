import { Dispatch, FC, SetStateAction } from "react";
import Logout from "../auth/Logout"

type MoreActionsProps = {
	setThemeOpen: Dispatch<SetStateAction<boolean>>;
}

const MoreActions: FC<MoreActionsProps> = ({ setThemeOpen }) => {
	return (
		<div className="flex flex-col gap-2 p-2">
			<button className='nav-link' onClick={() => setThemeOpen(true)}>Switch appearance</button>
			<Logout/>
		</div>
	)
}

export default MoreActions
