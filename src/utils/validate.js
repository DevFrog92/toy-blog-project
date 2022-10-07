const REGEX_EMAIL =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const checkEmail = email => REGEX_EMAIL.test(email);
export const checkIsSameValue = (value, value2) => {
	if (value && value2) {
		return value === value2;
	}

	return false;
};
export const checkIsExist = value => !!value;
