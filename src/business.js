
import {dependency} from "./dependency"

function business() { 
	return dependency();
};

window.business = business;

export {
	business
}
