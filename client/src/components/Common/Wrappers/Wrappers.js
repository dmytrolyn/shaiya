import React from 'react';
import { ContentItem } from '../styled/components';

export const ContentItemWrap = ({ children, ...props }) => {
    return (
        <ContentItem {...props}>
            {children}
            <span className="style style-1"></span><span className="style style-2"></span><span className="style style-3"></span><span className="style style-4"></span><span className="style style-5"></span><span className="style style-6"></span><span className="style style-7"></span><span className="style style-8"></span>
        </ContentItem>
    )
} 