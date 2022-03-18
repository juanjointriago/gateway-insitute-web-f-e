import axios from "axios";
import { baseURL } from '../setup/apiConfig';



const gatewayBE = axios.create({ baseURL });
