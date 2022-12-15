import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const CertificateViewer = ({ pdf }) => {
    if (!pdf) {
        console.error("pdf unable to be rendered");
        return null;
    }
    return (
        <div className="certificate">
            <Document file={pdf}> <Page pageNumber={1} height={225} /> </Document>
        </div>
    );
}

export default CertificateViewer;