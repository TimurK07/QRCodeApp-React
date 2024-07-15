import {QRCodeSVG} from 'qrcode.react';
import {useState} from "react";

import s from './qrCodeGenerarot.module.css'
import {GENERATE_DATA} from "../../constanst.js";

export const QrCodeGenerator = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');

	const onClickHandler = () => {
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

		setResult(value);
		setValue('');
	};

	const onChangeHandler = (event) => {
		setValue(event.target.value);
		setResult('');
	}

	return (
			<div className={s.container}>
				<input
						className={s.input}
						type="text"
						value={value}
						onChange={onChangeHandler}
						placeholder={'Enter your text here'}
				/>
				<button type='button' className={s.button} onClick={onClickHandler}>Generate Qr Code</button>

				{result !== '' && (
						<div className={s.qrWrapper}>
							<QRCodeSVG value={value} size={230}/>

						</div>
				)}
			</div>
	)
}