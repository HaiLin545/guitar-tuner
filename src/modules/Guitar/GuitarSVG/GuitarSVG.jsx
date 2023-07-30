import style from "./GuitarSVG.module.less";

const theme = {
    // bgColor: "#FFFFFF",
    titleColor: "#3D3D3D",
    txtColor: "pink",

    headColor: "#D8D8D8",
    boardColor: "#D7A676",
    pillowCOlor: "#E2D1C1",

    cycleOutlineColor: "#D7A676",
    cycleInterColor: "#E2D1C1",

    btnColor: ["#E2D1C1", "#E2D1C1", "#E2D1C1", "#E2D1C1", "#E2D1C1", "#E2D1C1"],
    stringColor: ["#FFC300", "#FFC300", "#FFC300", "#FFC300", "#FFC300", "#FFC300"],
};

const headTitle = "Guitar";
const headText = "tunner";

const renderTitle = () => {
    return (
        <g className="title">
            <text x="50%" y="80" fill={theme.titleColor} fontSize="30" textAnchor="middle">
                {headTitle}
            </text>
            <text x="50%" y="110" fill={theme.txtColor} fontSize="18" textAnchor="middle">
                {headText}
            </text>
        </g>
    );
};

const renderButtons = () => {
    return (
        <g className="btn">
            <g>
                <path
                    d="M263,151.5628L280.4312,151.5628L280.4312,162.6739C298.7798,171.9333,302.4495,160.82330000000002,302.4495,146.9331C302.4495,133.04294,298.7798,120.0815,280.4312,131.19249L280.4312,142.3023L263.917431,142.3023L263,151.5628Z"
                    fill={theme.btnColor[2]}
                    fillOpacity="1"
                />
            </g>
            <g>
                <path
                    d="M256,261.5628L273.4312,261.5628L273.4312,272.6739C291.7798,281.93330000000003,295.4495,270.8233,295.4495,256.9331C295.4495,243.04294,291.7798,230.0815,273.4312,241.19249L273.4312,252.3023L256.917431,252.3023L256,261.5628Z"
                    fill={theme.btnColor[1]}
                    fillOpacity="1"
                />
            </g>
            <g>
                <path
                    d="M248,369.5628L265.4312,369.5628L265.4312,380.6739C283.7798,389.93330000000003,287.4495,378.8233,287.4495,364.9331C287.4495,351.04294,283.7798,338.0815,265.4312,349.19249L265.4312,360.3023L248.917431,360.3023L248,369.5628Z"
                    fill={theme.btnColor[0]}
                    fillOpacity="1"
                />
            </g>
            <g transform="matrix(-1,0,0,-1,140.56878662109375,772.1510009765625)">
                <path
                    d="M70.28439331054688,401.37780048828125L71.20182431054687,410.63830048828123L89.55049331054687,410.63830048828123L89.55049331054687,421.74940048828125C107.89909331054687,431.0088004882813,111.56879331054688,419.89880048828127,111.56879331054688,406.0086004882813C111.56879331054688,392.11844048828124,107.89909331054687,379.15700048828126,89.55049331054687,390.26799048828127L89.55049331054687,401.37780048828125L70.28439331054688,401.37780048828125Z"
                    fill={theme.btnColor[5]}
                    fillOpacity="1"
                />
            </g>
            <g transform="matrix(-1,0,0,-1,124.56878662109375,558.1510009765625)">
                <path
                    d="M62.284393310546875,294.37780048828125L63.201824310546876,303.63830048828123L81.55049331054687,303.63830048828123L81.55049331054687,314.74940048828125C99.89909331054687,324.0088004882813,103.56879331054688,312.89880048828127,103.56879331054688,299.0086004882813C103.56879331054688,285.11844048828124,99.89909331054687,272.15700048828126,81.55049331054687,283.26799048828127L81.55049331054687,294.37780048828125L62.284393310546875,294.37780048828125Z"
                    fill={theme.btnColor[4]}
                    fillOpacity="1"
                />
            </g>
            <g transform="matrix(-1,0,0,-1,108.56880950927734,336.15093994140625)">
                <path
                    d="M54.28440475463867,183.37776997070313L55.20183575463867,192.63826997070313L73.55050475463867,192.63826997070313L73.55050475463867,203.74936997070313C91.89910475463867,213.00876997070313,95.56880475463868,201.89876997070314,95.56880475463868,188.00856997070312C95.56880475463868,174.1184099707031,91.89910475463867,161.15696997070313,73.55050475463867,172.26795997070312L73.55050475463867,183.37776997070313L54.28440475463867,183.37776997070313Z"
                    fill={theme.btnColor[3]}
                    fillOpacity="1"
                />
            </g>
        </g>
    );
};

const renderCycleOutline = () => {
    return (
        <g className="cycle-outline">
            <g>
                <ellipse
                    cx="87.51376152038574"
                    cy="146.66666793823242"
                    rx="16.513761520385742"
                    ry="16.666667938232422"
                    fill={theme.cycleOutlineColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="100.51376152038574"
                    cy="364.6666679382324"
                    rx="16.513761520385742"
                    ry="16.666667938232422"
                    fill={theme.cycleOutlineColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="92.56887626647949"
                    cy="257.1481742858887"
                    rx="16.513761520385742"
                    ry="16.666667938232422"
                    fill={theme.cycleOutlineColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="233.51376152038574"
                    cy="146.66666793823242"
                    rx="16.513761520385742"
                    ry="16.666667938232422"
                    fill={theme.cycleOutlineColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="230.51376152038574"
                    cy="256.6666679382324"
                    rx="16.513761520385742"
                    ry="16.666667938232422"
                    fill={theme.cycleOutlineColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="221.51376152038574"
                    cy="364.6666679382324"
                    rx="16.513761520385742"
                    ry="16.666667938232422"
                    fill={theme.cycleOutlineColor}
                    fillOpacity="1"
                />
            </g>
        </g>
    );
};

const renderCycleInter = () => {
    return (
        <g className="cycle-inter">
            <g>
                <ellipse
                    cx="92.56887435913086"
                    cy="257.1481771469116"
                    rx="9.174312591552734"
                    ry="9.259261131286621"
                    fill={theme.cycleInterColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="87.51375961303711"
                    cy="146.66667079925537"
                    rx="9.174312591552734"
                    ry="9.259261131286621"
                    fill={theme.cycleInterColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="100.51375961303711"
                    cy="364.66667079925537"
                    rx="9.174312591552734"
                    ry="9.259261131286621"
                    fill={theme.cycleInterColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="233.51379013061523"
                    cy="146.66667079925537"
                    rx="9.174312591552734"
                    ry="9.259261131286621"
                    fill={theme.cycleInterColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="230.51379013061523"
                    cy="256.66667079925537"
                    rx="9.174312591552734"
                    ry="9.259261131286621"
                    fill={theme.cycleInterColor}
                    fillOpacity="1"
                />
            </g>
            <g>
                <ellipse
                    cx="221.51379013061523"
                    cy="364.66667079925537"
                    rx="9.174312591552734"
                    ry="9.259261131286621"
                    fill={theme.cycleInterColor}
                    fillOpacity="1"
                />
            </g>
        </g>
    );
};

const renderStrings = () => {
    return (
        <g className="strings">
            <g>
                <g transform="matrix(0,0.9999546408653259,-0.9999546408653259,0,690.9779101014137,283.0092532634735)">
                    <line
                        onClick={() => {
                            console.log("click string 5");
                        }}
                        className={style.string}
                        x1="204"
                        y1="486.5"
                        x2="315"
                        y2="486.5"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[0]}
                        fill="none"
                        strokeWidth="1"
                    />
                </g>
                <g transform="matrix(-0.07297554612159729,0.9972895979881287,-0.9972896575927734,-0.07297556847333908,592.5545163452625,179.21339812129736)">
                    <line
                        className={style.string}
                        x1="213"
                        y1="364.5"
                        x2="336.32879638671875"
                        y2="364.5"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[0]}
                        fill="none"
                        strokeWidth="1"
                    />
                </g>
            </g>
            <g>
                <g transform="matrix(0,0.9999579191207886,-0.9999579191207886,0,672.979506611824,301.0078270435333)">
                    <line
                        className={style.string}
                        x1="186"
                        y1="486.30000001192093"
                        x2="297"
                        y2="486.30000001192093"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[1]}
                        fill="none"
                        strokeWidth="1.399999976158142"
                    />
                </g>
                <g transform="matrix(-0.15398548543453217,0.9880731701850891,-0.9880730509757996,-0.15398547053337097,510.1195518672466,77.22202214598656)">
                    <line
                        className={style.string}
                        x1="222"
                        y1="256.30000001192093"
                        x2="455.7883605957031"
                        y2="256.30000001192093"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[1]}
                        fill="none"
                        strokeWidth="1.399999976158142"
                    />
                </g>
            </g>
            <g>
                <g transform="matrix(0,0.9999594688415527,-0.999959409236908,0,653.9802322983742,320.0067687034607)">
                    <line
                        className={style.string}
                        x1="167"
                        y1="486.19999998807907"
                        x2="278"
                        y2="486.19999998807907"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[2]}
                        fill="none"
                        strokeWidth="1.600000023841858"
                    />
                </g>
                <g transform="matrix(-0.1676795482635498,0.9858415722846985,-0.9858415126800537,-0.1676795780658722,407.6465595392583,-50.165359982626796)">
                    <line
                        className={style.string}
                        x1="224.99993896484375"
                        y1="146.2000305056572"
                        x2="570.897216796875"
                        y2="146.2000305056572"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[2]}
                        fill="none"
                        strokeWidth="1.600000023841858"
                    />
                </g>
            </g>
            <g>
                <g transform="matrix(0,1,-1,0,638,336)">
                    <line
                        className={style.string}
                        x1="151"
                        y1="486.10000002384186"
                        x2="262"
                        y2="486.10000002384186"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[3]}
                        fill="none"
                        strokeWidth="1.7999999523162842"
                    />
                </g>
                <g transform="matrix(0.162052184343338,0.9867821335792542,-0.9867821931838989,0.1620521992444992,224.6620549996187,29.434049593166947)">
                    <line
                        className={style.string}
                        x1="95"
                        y1="146.10003054141998"
                        x2="440.5675964355469"
                        y2="146.10003054141998"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[3]}
                        fill="none"
                        strokeWidth="1.7999999523162842"
                    />
                </g>
            </g>
            <g>
                <g transform="matrix(0,1,-1,0,619,355)">
                    <line
                        className={style.string}
                        x1="132"
                        y1="486"
                        x2="243"
                        y2="486"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[4]}
                        fill="none"
                        strokeWidth="2"
                    />
                </g>
                <g transform="matrix(0.13780315220355988,0.9903773069381714,-0.9903773665428162,0.13780313730239868,341.7371057955279,123.40911250648423)">
                    <line
                        className={style.string}
                        x1="100"
                        y1="257.00006103515625"
                        x2="332.21531677246094"
                        y2="257.00006103515625"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[4]}
                        fill="none"
                        strokeWidth="2"
                    />
                </g>
            </g>
            <g>
                <g transform="matrix(0,0.9999658465385437,-0.9999658465385437,0,598.9833672642708,375.0038251876831)">
                    <line
                        className={style.string}
                        x1="112"
                        y1="485.89999997615814"
                        x2="223"
                        y2="485.89999997615814"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[5]}
                        fill="none"
                        strokeWidth="2.200000047683716"
                    />
                </g>
                <g transform="matrix(0.0325034074485302,0.999462902545929,-0.9994629621505737,0.0325034037232399,469.2935836548653,245.19429466724432)">
                    <line
                        onClick={() => {
                            console.log("click string 5");
                        }}
                       
                        className={style.string}
                        x1="107.99996948242188"
                        y1="364.89999997615814"
                        x2="231.0649871826172"
                        y2="363.89999997615814"
                        fillOpacity="0"
                        strokeOpacity="1"
                        stroke={theme.stringColor[5]}
                        fill="none"
                        strokeWidth="2.200000047683716"
                    />
                </g>
            </g>
        </g>
    );
};

export default function GuitarSVG() {
    const svgHeight = 600;
    const svgWidth = 320;
    return (
        <div className={style["svg-wrapper"]}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="none"
                height={svgHeight}
                width={svgWidth}
                version="1.1"
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className={style.svg}
            >
                <defs>
                    <filter
                        id="master_svg0_19_2514"
                        filterUnits="objectBoundingBox"
                        colorInterpolationFilters="sRGB"
                        x="-20"
                        y="-16"
                        width="163"
                        height="40"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" dx="0" />
                        <feGaussianBlur stdDeviation="5" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3019607961177826 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
                <g>
                    <g className="background">
                        <rect
                            x="0"
                            y="0"
                            width={svgWidth}
                            height={svgHeight}
                            rx="0"
                            fill={theme.bgColor}
                            fillOpacity="1"
                        />
                    </g>
                    {renderButtons()}
                    <g className="board-head">
                        <g>
                            <rect
                                x="98"
                                y="487"
                                width="123"
                                height="111"
                                rx="0"
                                fill={theme.boardColor}
                                fillOpacity="1"
                            />
                        </g>
                        <g>
                            <rect
                                x="98"
                                y="472"
                                width="123"
                                height="15"
                                rx="0"
                                fill={theme.pillowCOlor}
                                fillOpacity="1"
                            />
                        </g>
                        <g>
                            <path
                                d="M45,39.8788L71.3805,398.608C97.6356,415.085,97.85220000000001,449.211,97.99119999999999,471.103L97.9969,472L220.87,472C222.307,426.953,220.87,415.312,247.251,398.608L271,39.8788L220.87,35.701499999999996C196.739,16.28191,174.643,12.442448,158,12C141.2562,12.19494,119.8131,15.50004,96.8817,35.701499999999996L45,39.8788Z"
                                fill={theme.headColor}
                                fillOpacity="1"
                            />
                        </g>
                    </g>
                    {renderTitle()}
                    {renderCycleOutline()}
                    {renderStrings()}
                    {renderCycleInter()}
                    <g filter="url(#master_svg0_19_2514)">
                        <path
                            d="M221,544.5L159.5,544.5L98,544.5L98,541.5L159.5,541.5L221,541.5L221,544.5Z"
                            fillRule="evenodd"
                            fill="#D8D8D8"
                            fillOpacity="1"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}
