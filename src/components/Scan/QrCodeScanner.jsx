import {Scanner} from "@yudiel/react-qr-scanner";
import {useState} from "react";
import s from './qrCodeScanner.module.css'

import { SCAN_DATA } from '../../constanst.js'

export const QrCodeScanner = () => {
	const [scanned, setScanned] = useState(null);

	const scanHandler = (result) => {
		setScanned(result[0].rawValue);

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

		localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
	};

	return (
			<div className={s.container}>
				<p className={s.text}>Наведите QR Code на камеру</p>
				<Scanner
						onScan={scanHandler}
						allowMultiple
						components={{
							audio: false,
							finder: false,
						}}
						styles={{
							container: {
								width: 300,
							}
						}}
				/>
				<p className={s.scanned}>{scanned}</p>
			</div>
	)
}