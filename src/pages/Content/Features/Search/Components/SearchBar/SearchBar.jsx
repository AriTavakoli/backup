import React, { useState, useEffect, useRef } from 'react';
import Result from './Result';

export default function SearchBar({ onSearch, onChange, value }) {
  return (
    <div style={{ position: 'absolute', zIndex: '500', right: '5%', borderRadius: '20px' }}>
      <div style={{ width: '100%', maxWidth: '600px', display: 'inline' }}>
        <div style={{ display: 'flex', boxSizing: 'border-box', borderStyle: 'none', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 4px 0px, rgba(0, 0, 0, 0.24) 0px 4px 16px 0px', borderWidth: '1px', borderColor: 'rgb(33, 33, 33)', borderRadius: '20px', overflow: 'visible' }}>
          <div style={{ backgroundColor: 'rgb(64, 64, 64)', flex: '1 1 0%', borderRadius: '20px' }}>
            <div id='inputmain'
              style={{
                borderStyle: 'initial',
                alignItems: 'center',
                background: 'rgb(33, 33, 33)',
                padding: '0px',
                borderWidth: '0px',
                borderRadius: '20px',
                borderColor: 'initial',
                display: 'flex',
                position: 'relative',
                flexShrink: '0'
              }}>
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', width: '24px', left: '12px' }}>
                <svg data-icon="SearchMedium14" aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 14 14" className="bem-Svg" style={{ display: 'block', position: 'static', width: '14', height: '14' }}>
                  <path fill="currentColor" d="M15.53 14.47l-3.795-3.795A5.965 5.965 0 0013 7a6 6 0 10-6 6 5.97 5.97 0 003.675-1.264l3.795 3.795 1.06-1.06v-.001zM7 11.5c-2.48 0-4.5-2.02-4.5-4.5S4.52 2.5 7 2.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"></path>
                </svg>
              </div>
              <input onKeyPress={(e) => e.key === 'Enter' && onSearch(value)} autoFocus="autoFocus" type="text" value={value} onChange={onChange}
                placeholder="Find anything..." style={{ borderStyle: 'none', lineHeight: '16px', padding: '0px 48px', height: '30px', fontSize: '14px', borderRadius: '20px', color: 'rgb(235, 235, 235)', background: 'rgb(33, 33, 33)', borderWidth: '1px', borderColor: 'rgb(33, 33, 33)', borderRadius: '20px', boxSizing: 'border-box', display: 'block', width: '100%', fontFamily: 'inherit', outline: '0px' }} />
              <div style={{ position: 'absolute', zIndex: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', width: '24px', right: '12px', color: 'rgb(117, 117, 117)' }}>
                <svg data-icon="SettingsMedium" aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" className="bem-Svg">
                  <path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 00-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 00-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 00-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 00-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 001.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 110-5.565 2.782 2.782 0 010 5.565z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
