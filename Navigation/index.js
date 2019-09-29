import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName, params) {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function resetStack() {
  _navigator.dispatch(StackActions.popToTop());
}

function popStack() {
  _navigator.dispatch(
    StackActions.pop({
      n: 1,
    }),
  );
}

export default {
  navigate,
  push,
  resetStack,
  popStack,
  setTopLevelNavigator,
};
