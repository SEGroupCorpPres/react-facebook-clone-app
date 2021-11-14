import React from 'react';
import './Widgets.css';

function Widgets() {
    return ( <div className = 'widgets' >
        <iframe title = 'facebook'
        src = 'https://www.facebook.com/groups/368290769869832/?hoisted_section_header_type=recently_seen&multi_permalinks=3915180358514171&__cft__[0]=AZVi_NuZtkCjPNElFkMwL9kOx6oFwtHJWQfi7BU34ge2O6GYvRHSRKweSaFet_13tdelZj063OXEkOlgtLdFXO2Yy6KQM3HdKuMBxyPsRe3KKQKt-FXtVZOwP_XxfLbcMDIaZcyPTQRAZALzg-cfl4iOO5NdNjVOwku1a75vG1ZAdLdLIQmggrx2kSaGxZJahh4&__tn__=-UC%2CP-R'
        width = '340'
        height = '100%'
        style = {
            { border: 'nonoe', overflow: 'hidden' }
        }
        scrolling = 'no'
        frameBorder = '0'
        allowTransparency = 'true'
        allow = 'encrypted-media' >
        </iframe> </div >
    );
}

export default Widgets;