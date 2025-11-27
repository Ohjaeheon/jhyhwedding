import { useEffect } from "react"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { GALLERY_IMAGES } from "../../images"

export const Gallery = () => {
    const { openModal } = useModal()

    useEffect(() => {
        // 이미지 미리 로딩
        GALLERY_IMAGES.forEach((image) => {
            const img = new Image()
            img.src = image
        })
    }, [])

    const handleImageClick = (image: string, idx: number) => {
        openModal({
            className: "photo-viewer-modal",
            closeOnClickBackground: true, // 모달 밖을 클릭하면 닫힘
            header: null,
            content: (
                <div className="photo-viewer">
                    <img src={image} alt={`사진 ${idx + 1}`} draggable={false} />
                </div>
            ),
            footer: null, // 닫기 버튼 없음
        })
    }

    return (
        <LazyDiv className="card gallery">
            <h2 className="english">Gallery</h2>

            {/* 메인 3×3 그리드 + 스크롤 */}
            <div className="photo-grid-main">
                {GALLERY_IMAGES.map((image, idx) => (
                    <button
                        key={idx}
                        type="button"
                        className="photo-grid-item"
                        onClick={() => handleImageClick(image, idx)}
                    >
                        <img src={image} alt={`사진 ${idx + 1}`} draggable={false} />
                    </button>
                ))}
            </div>
        </LazyDiv>
    )
}
