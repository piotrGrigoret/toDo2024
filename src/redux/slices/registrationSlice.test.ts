import registrationReducer, { setName, checkAuth, initialState} from "./registrationSlice";

describe('registration reducer', () => {
    


    test('should handle initial state', () => {
        expect(registrationReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    test('should handle checkAuth with valid name', () => {
        const stateWithValidName = { ...initialState, name: 'John' };
        const actual = registrationReducer(stateWithValidName, checkAuth());
        expect(actual.isAuth).toEqual(true);
        expect(actual.snackBarMsg).toEqual('Successful authorization');
        expect(actual.snackBarStatus).toEqual('success');
    });
    
    test('should handle checkAuth with invalid name (too short)', () => {
        const stateWithInvalidName = { ...initialState, name: 'Jo' };
        const actual = registrationReducer(stateWithInvalidName, checkAuth());
        expect(actual.isAuth).toEqual(false);
        expect(actual.snackBarMsg).toEqual('Your nickname must be from 3 to 10 characters');
        expect(actual.snackBarStatus).toEqual('error');
    });
    
    test('should handle checkAuth with invalid name (too long)', () => {
        const stateWithInvalidName = { ...initialState, name: 'JohnDoeWithVeryLongName' };
        const actual = registrationReducer(stateWithInvalidName, checkAuth());
        expect(actual.isAuth).toEqual(false);
        expect(actual.snackBarMsg).toEqual('Your nickname must be from 3 to 10 characters');
        expect(actual.snackBarStatus).toEqual('error');
    });

})