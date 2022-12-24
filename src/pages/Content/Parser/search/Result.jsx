import React from 'react';

const ResultsTab = () => {
  return (
    <div style={{ backgroundColor: 'rgb(64, 64, 64)', flex: '1 1 0%' }}>
      <div style={{ marginLeft: '12px', marginRight: '12px', marginBottom: '12px', columnGap: '12px', display: 'grid', gridAutoFlow: 'column', gridAutoColumns: 'max-content', borderBottom: '1px solid rgb(43, 43, 43)' }}>
        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '16px', position: 'relative', color: 'rgb(235, 235, 235)', cursor: 'default', userSelect: 'none', maxWidth: '100%', paddingTop: '12px', paddingBottom: '12px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', sansSerif: 'true' }}>
          <div style={{ width: '57.5938px' }}>All results</div>
          <div style={{ position: 'absolute', width: '100%', height: '2px', bottom: '0px', backgroundColor: 'rgb(235, 235, 235)' }}></div>
        </div>
        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '16px', position: 'relative', color: 'rgb(117, 117, 117)', cursor: 'default', userSelect: 'none', maxWidth: '100%', paddingTop: '12px', paddingBottom: '12px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', sansSerif: 'true', pointerEvents: 'none' }}>
          <div style={{ width: '53.7969px' }}>Elements</div>
          <div style={{ position: 'absolute', width: '100%', height: '2px', bottom: '0px', backgroundColor: 'transparent' }}></div>
        </div>
        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '16px', position: 'relative', color: 'rgb(171, 171, 171)', cursor: 'default', userSelect: 'none', maxWidth: '100%', paddingTop: '12px', paddingBottom: '12px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', sansSerif: 'true' }}>
          <div style={{ width: '74.5781px' }}>Components</div>
          <div style={{ position: 'absolute', width: '100%', height: '2px', bottom: '0px', backgroundColor: 'transparent' }}></div>
        </div>
        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '16px', position: 'relative', color: 'rgb(117, 117, 117)', cursor: 'default', userSelect: 'none', maxWidth: '100%', paddingTop: '12px', paddingBottom: '12px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', sansSerif: 'true', pointerEvents: 'none' }}>
          <div style={{ width: '45.7969px' }}>Layouts</div>
          <div style={{ position: 'absolute', width: '100%', height: '2px', bottom: '0px', backgroundColor: 'transparent' }}></div>
        </div>
        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '16px', position: 'relative', color: 'rgb(117, 117, 117)', cursor: 'default', userSelect: 'none', maxWidth: '100%', paddingTop: '12px', paddingBottom: '12px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', sansSerif: 'true', pointerEvents: 'none' }}>
          <div style={{ width: '35.7188px' }}>Pages</div>
          <div style={{ position: 'absolute', width: '100%', height: '2px', bottom: '0px', backgroundColor: 'transparent' }}></div>
        </div>
        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '16px', position: 'relative', color: 'rgb(117, 117, 117)', pointerEvents: 'none', cursor: 'default', userSelect: 'none', maxWidth: '100%', paddingTop: '12px', paddingBottom: '12px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', sansSerif: 'true' }}>
          <div style={{ width: '65.4062px' }}>Collections</div>
          <div style={{ position: 'absolute', width: '100%', height: '2px', bottom: '0px', backgroundColor: 'transparent' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTab;