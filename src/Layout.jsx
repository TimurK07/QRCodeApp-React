import { Routes, Route } from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {QrCodeGenerator} from "./components/Generate/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/Scan/QrCodeScanner.jsx";
import {GenerateHistory} from "./components/GenerateHistory/GenerateHistory.jsx";
import {ScanHistory} from "./components/ScanHistory/ScanHistory.jsx";

export const Layout = ({result}) => {
	return (
			<div>
				<h1 align='center'>QR Code Generator</h1>
				<p align='center'>Generate your QR code here!</p>
				<Navigation/>

				<Routes>
					<Route path="/generate" element={<QrCodeGenerator />} />
					<Route path="/scan" element={<QrCodeScanner />} />
					<Route path="/generatehistory" element={<GenerateHistory />} />
					<Route path="/scanhistory" element={<ScanHistory />} />
				</Routes>
			</div>
	)
}