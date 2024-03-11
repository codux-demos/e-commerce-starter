import { media as wixMedia } from '@wix/sdk';

export function getImageHttpUrl(url?: string, width?: number, height?: number) {
    const isWixMedia = url?.startsWith('wix:image');
    const isWixUrl = url?.includes('static.wixstatic.com');

    if (!url || (!isWixMedia && !isWixUrl)) {
        return url;
    }

    if (isWixMedia) {
        return wixMedia.getScaledToFillImageUrl(url, width || 400, height || 100, {});
    }

    if (width && height) {
        return url.replace(/(w_)\d+/, `$1${width}`).replace(/(h_)\d+/, `$1${height}`);
    }
    return url;
}
