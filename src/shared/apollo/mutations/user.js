import gql from 'graphql-tag';

const REGISTER = gql`
	mutation($email: String!) {
		register(email: $email) {
			errors {
				path
				message
			}
		}
	}
`;

export default { REGISTER }