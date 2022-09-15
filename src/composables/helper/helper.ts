export function testImage(URL: string) {
    let result = false;
    // eslint-disable-next-line
    const tester: any = new Image();
    tester.src = URL;
    tester.addEventListener('load', () => {
        result = true;
    });
    tester.addEventListener('error', () => {
        result = false;
    });
    return result;
}

export function convertDateToVN(value: string) {
    const getDate = new Date(value);
    const resultDate = new Intl.DateTimeFormat("vi-VN").format(getDate);
    return resultDate;
}

export function convertTimeToVn(value: string) {
    const getTimeHours = new Date(value).getHours();
    const getTimeGetMinutes = new Date(value).getMinutes();
    const getTimeMinutes = String(getTimeGetMinutes).padStart(2, '0');
    return {
        hours: getTimeHours,
        minute: getTimeMinutes,
        all: getTimeHours +':'+getTimeMinutes
    };
}

export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
