import React from 'react'

import {
	Container as ContainerStyled,
	Area as AreaStyled,
	Img as ImgStyled,
	Msg as MsgStyled,
	Footer as FooterStyled
} from './styles'

const Notification = ({ data }) => {
	const { who, name, image, date, msg } = data

	return (
		<ContainerStyled>
			<AreaStyled>
				<MsgStyled>
					<p>{ msg }</p>
				</MsgStyled>
				<ImgStyled>
					<img 
						src='data:image/jpeg;base64,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' 
						alt={`Imagem do/da ${ name }`} />
				</ImgStyled>
			</AreaStyled>
			<FooterStyled>
				<span className='name'>{ name }</span>
				<span className='date'>{ date }</span>
			</FooterStyled>
		</ContainerStyled>
	)
}

export default Notification
