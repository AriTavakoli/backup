import React, { useState, useEffect } from 'react';


export default function ShareLargeIcon() {
  return (
    <button
      data-automation-id="symbol-panel-drop-down-edit"
      type="button"
      sizing="small"
      structure="ghost"
      tabindex="0"
      style={{
        border: 'none',
        outline: '0px',
        cursor: 'default',
        userSelect: 'none',
        padding: '0px',
        fontFamily: 'inherit',
        fontSize: '11px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '24px',
        borderRadius: '2px',
        color: 'rgb(171, 171, 171)',
        background: 'transparent',
        boxSizing: 'border-box',
        boxShadow: 'none',
        alignSelf: 'center',
        width: '24px'
      }}
    >
      <div className="--styled-lihrRi wf-1mrza4x">
        <svg
          data-icon="ShareLarge"
          aria-hidden="true"
          focusable="false"
          width="14"
          height="14"
          viewBox="0 0 20 20"
          className="bem-Svg"
        >
          <path
            fill="currentColor"
            d="M14 11V7.33h-2a3 3 0 00-3 3v3H7v-3a4.998 4.998 0 015-5h2V2l6 4.5-6 4.5z"
          />
          <path
            fill="currentColor"
            d="M7.108 4H2a1 1 0 00-1 1v12a1 1 0 001 1h15a1 1 0 001-1v-5.25l-2 1.5V16H3V6h2.272a8.044 8.044 0 011.836-2z"
          />
        </svg>
      </div>
    </button>
  );
};