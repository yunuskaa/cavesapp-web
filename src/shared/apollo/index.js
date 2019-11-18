import userQueries from './queries/user';
import userMutations from './mutations/user';

export default {
	user: {
		...userQueries,
		...userMutations,
	},
};