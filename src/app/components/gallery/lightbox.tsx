// Lightbox.tsx
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IoClose } from "react-icons/io5"; // Close icon
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Left and right chevron icons

interface LightboxProps {
    isOpen: boolean;
    photoIndex: number | null;
    basements: Array<{ src: StaticImageData; alt: string }>;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox = ({
    isOpen,
    photoIndex,
    basements,
    onClose,
    onPrev,
    onNext,
}: LightboxProps) => {
    if (!isOpen || photoIndex === null) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: "800px" }}
            >
                <span className="close" onClick={onClose}>
                    <IoClose />
                </span>
                <Image
                    src={basements[photoIndex].src}
                    alt={basements[photoIndex].alt}
                    style={{ maxWidth: "90%" }}
                />
                <div className="navigation">
                    <button onClick={onPrev}>
                        <FiChevronLeft />
                    </button>
                    <button onClick={onNext}>
                        <FiChevronRight />
                    </button>
                </div>
            </div>
            <style jsx>{`
                .lightbox-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                .lightbox-content {
                    position: relative;
                    padding: 16px;
                    border-radius: 8px;
                }
                .close {
                    position: absolute;
                    top: 8px;
                    right: 0;
                    cursor: pointer;
                    font-size: 24px;
                    color: white;
                    border: 2px solid white;
                    border-radius: 20px;
                    padding: 2px;
                }
                .navigation {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
                button {
                    background: none;
                    font-size: 32px;
                    cursor: pointer;
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default Lightbox;
