import React, { MouseEvent } from 'react';

type CardProps = {
    /** card title placed on top of the card */
    title?: string,

    /** small text placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed below the image (if present) */
    paragraph?: string,

    /** image placed on the middle or bottom of the card, dependending o the `elementsPlacement` attribute. Default: placed bellow the title (if present)  */
    imageURL?: string,

    /** how the elements are positioned on the card. Possible options:
     * - pi
     * - ip
     * pi = paragraph then image
     * ip = image then paragraph
     */
    elementsPlacement?: string,

    /** if present, displays a button with this label and the onClick event is triggered only by the button. 
     *  if not present, no button is shown and the onClick event is triggered by the Card click event
     * */
    buttonLabel?: string,

    /** function invoked when the card or button is clicked */
    onClick?: Function,
}

function Card({
    title,
    paragraph,
    imageURL,
    elementsPlacement,
    buttonLabel,
    onClick
}: CardProps) {

    let paragraphAndImage = <>
        {imageURL && <img alt={imageURL} src={imageURL} />}
        {paragraph && <p className="card-text">{paragraph}</p>}
    </>

    if (elementsPlacement === "pi") {
        paragraphAndImage = <>
            {paragraph && <p className="card-text">{paragraph}</p>}
            {imageURL && <img alt={imageURL} src={imageURL} />}
        </>
    }

    const onCardClick = (event: MouseEvent) => {
        if (!buttonLabel && onClick) {
            onClick(event)
        }
    }
    const onButtonClick = (event: MouseEvent) => {
        if (onClick) {
            onClick(event)
        }
    }


    return (
        <div className="card h-100" onClick={onCardClick}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                {title && <h2 className="card-title text-primary">{title}</h2>}
                {paragraphAndImage}
                {buttonLabel && <button className="btn btn-primary mt-auto" onClick={onButtonClick}>{buttonLabel}</button>}
            </div>
        </div>
    )
}

export default Card