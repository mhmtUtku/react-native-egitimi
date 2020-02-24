import {gql} from 'apollo-boost';

export const POKEMON_QUERY = gql`
	query Pokemon($id: String) {
		pokemon(id: $id) {
			id
			name
		}
	}
`;