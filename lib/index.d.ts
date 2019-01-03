export interface State<S> {
    state: S;
    setState: (prevState: S) => void;
}
export default function createHook<S>(initialState: S | (() => S)): State<S>;
