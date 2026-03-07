 #Redux store
1.create App store
   -SS
2.Provide(add) store to the application
   -SS
3.Create Slice for Cart (Slice - small portion of redux store where we manage data of specific feature)
   -SS
4.Add cartSlice to AppStore
   -SS
5.Subscribing(connecting) to the store with UI using a selector
   -selector is a hook inside react-redux library (useSelector)
   -this hook gives access to the store
   -selector reads the store
   - it is used to get acces to the items of cart


   #Types of Testing(developer) -
   1.Unit Testing
   2.Integration Testing
   3.End to End Testing

   #Setting up Testing in our App
    -Install React Test library
    -Install Jest
    -Install Babel dependencies
    -Configure Babel
    -Configure Parcel config file to disable default babel transpilation
    -Jest configuration -> npx create-jest
    -Install jsdom library
    -Install @babel/preset-react - to make JSX works in test cases
    -Include @babel/preset-react inside my babel config
    -Install @testing-library/jest-dom
    - 3 steps for writing test
      1.render(jsdom)
      2.Quering
      3.Assertion




    