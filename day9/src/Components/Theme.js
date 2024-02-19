// Theme.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../Store/Action';

export default function ThemeComponent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      Theme
      <div style={{ height: 200, width: 200, backgroundColor: theme }}> </div>
      <button onClick={() => dispatch(change())}>Change Theme</button>
    </div>
  );
} 
