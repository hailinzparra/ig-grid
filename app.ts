const create_canvas = (w: number, h: number) => {
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')!
    return { canvas, ctx }
}

const download_canvas = (filename: string, canvas: HTMLCanvasElement) => {
    const link = document.createElement('a')
    link.download = filename
    link.href = canvas.toDataURL()
    link.click()
}

const split_3_by_width = (name: string, img: HTMLImageElement) => {
    const size = img.width / 3
    const { canvas, ctx } = create_canvas(size, size)

    for (let i = 0; i < 3; i++) {
        ctx.drawImage(img, i * size, 0, size, size, 0, 0, size, size)
        download_canvas(`${i}_${name}.png`, canvas)
    }
}

const split_image = (name: string, src: string) => {
    const img = new Image()
    img.onload = () => {
        split_3_by_width(name, img)
    }
    img.src = src
}

/**
 * Split image with custom name
 */
const sin = (src: string, ...name: string[]) => {
    const img = new Image()
    img.onload = () => {
        const size = img.width / 3
        const { canvas, ctx } = create_canvas(size, size)

        for (let i = 0; i < 3; i++) {
            ctx.drawImage(img, i * size, 0, size, size, 0, 0, size, size)
            download_canvas(`${name[i]}.png`, canvas)
        }
    }
    img.src = src
}
