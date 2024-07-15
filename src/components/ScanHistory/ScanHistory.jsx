import {SCAN_DATA} from "../../constanst.js";
import {QRCodeSVG} from "qrcode.react";

export const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
	return (
			<div>
				{data.map((text) => (
						<ol>
							<li key={text}>
								{text}
								<p><QRCodeSVG value={text} size={100}/> </p>
							</li>
						</ol>
				))}
			</div>
	)
}