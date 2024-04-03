import { Position, MarkerProps } from './Marker';

export interface DataMarkerProps extends MarkerProps {
  name: string;
}
const markers: DataMarkerProps[] = [
  {
    name: 'coffee',
    Positions: [
      { lat: 37.499590490909185, lng: 127.0263723554437 },
      { lat: 37.499427948430814, lng: 127.02794423197847 },
      { lat: 37.498553760499505, lng: 127.02882598822454 },
      { lat: 37.497625593121384, lng: 127.02935713582038 },
      { lat: 37.49646391248451, lng: 127.02675574250912 },
      { lat: 37.49629291770947, lng: 127.02587362608637 },
      { lat: 37.49754540521486, lng: 127.02546694890695 },
    ],
    Origin: { x: 10, y: 0 },
  },
  {
    name: 'store',
    Positions: [
      { lat: 37.497535461505684, lng: 127.02948149502778 },
      { lat: 37.49671536281186, lng: 127.03020491448352 },
      { lat: 37.496201943633714, lng: 127.02959405469642 },
      { lat: 37.49640072567703, lng: 127.02726459882308 },
      { lat: 37.49640098874988, lng: 127.02609983175294 },
      { lat: 37.49932849491523, lng: 127.02935780247945 },
      { lat: 37.49996818951873, lng: 127.02943721562295 },
    ],
    Origin: { x: 10, y: 36 },
  },
  {
    name: 'carpark',
    Positions: [
      { lat: 37.49966168796031, lng: 127.03007039430118 },
      { lat: 37.499463762912974, lng: 127.0288828824399 },
      { lat: 37.49896834100913, lng: 127.02833986892401 },
      { lat: 37.49893267508434, lng: 127.02673400572665 },
      { lat: 37.49872543597439, lng: 127.02676785815386 },
      { lat: 37.49813096097184, lng: 127.02591949495914 },
      { lat: 37.497680616783086, lng: 127.02518427952202 },
    ],

    Origin: { x: 10, y: 72 },
  },
];

export default markers;
