import React from 'react';
import Col from 'react-bootstrap/Col';


export const NoResults = () => {
    return (
        <Col 
            md={{ span: 6, offset: 3 }}
            sm={{ span: 6, offset: 3 }}
            lg={{ span: 6, offset: 3 }}
            className='no-results__container'
        >
            <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                    <g id="task-list-plain">
                        <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M18.7448 0.525729C14.5074 0.650657 11.0485 3.87686 10.558 8.02097L4 8.02197C1.79086 8.02197 0 9.81283 0 12.022V43.522C0 45.7311 1.79086 47.522 4 47.522H34C36.2091 47.522 38 45.7311 38 43.522V12.022L37.9951 11.8223C37.8911 9.70594 36.1422 8.02197 34 8.02197L27.441 8.02097C26.9418 3.79414 23.353 0.521973 19 0.521973L18.7448 0.525729ZM19 2.52197C22.5899 2.52197 25.5 5.43212 25.5 9.02197C25.5 9.57426 25.9477 10.022 26.5 10.022H34C35.1046 10.022 36 10.9174 36 12.022V43.522C36 44.6265 35.1046 45.522 34 45.522H4C2.89543 45.522 2 44.6265 2 43.522V12.022C2 10.9174 2.89543 10.022 4 10.022H11.5C12.0523 10.022 12.5 9.57426 12.5 9.02197C12.5 5.43212 15.4101 2.52197 19 2.52197ZM19.1435 6.52777L19 6.52197L18.8565 6.52777C17.9571 6.60078 17.25 7.3538 17.25 8.27197C17.25 9.23847 18.0335 10.022 19 10.022C19.9665 10.022 20.75 9.23847 20.75 8.27197C20.75 7.3538 20.0429 6.60078 19.1435 6.52777Z" fill="#B9BDCF"/>
                    </g>
                </g>
            </svg>
            <p className="font-small">Ooops… It’s empty here</p>
            <p className="font-smallest gray-text">There are no products on the list</p>
        </Col>
    )
}