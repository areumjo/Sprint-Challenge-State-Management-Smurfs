## Plan for application - React-Redux 

### Building Redux Structure

0. redux wire up
    - Check the dependency from package.json
        - redux
        - react-redux
        - redux-thunk
        - axios

1. create store from Redux (index.js )

2. build a reducer and pass the reduer to createStore ==> initialState and reducer = (state = initialState, action)

    - 2.0 switch (better to set up default first)
    - 2.1 make more reducers

3. import Provider and wrap it around <App />


### Steps for UI/component
1. Build component files
2. Connect WebcamList - test connection
3. Define states in JSX 
    - Landing state 
    - Loading state 
    - Error state 
    - Success state
    - _Redux Thunk_
4. Build action creator
5. Define action types
6. Add redux logic for actions