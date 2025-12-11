"use client";

import React, { useState, useEffect } from 'react';

export default function ErrorPage( {error}: {error: Error}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="error-container">
            <h1 className="error-header">❌ Oops! Something went wrong.</h1>
            <p className="error-message">{error.message}</p>
            <p className="error-suggestion">Please try refreshing the page or come back later.</p>
        </div>
    );
}