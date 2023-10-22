package com.mime.mimefront.graphics;

public class Render {
    public final int[] pixels;
    public int width;
    public int height;

    public Render(int width, int height) {
        this.width = width;
        this.height = height;
        pixels = new int[width * height];
    }

    public void draw(Render render, int xOffSet, int yOffSet) {

        for (int y = 0; y < render.height; y++) {
            int yPix = y + yOffSet;
             for ( int x = 0; x < render.width; x++ ) {
                 int xPix = x + xOffSet;
                 pixels[xPix + yPix * width] = render.pixels[x + y * render.width];
             }
        }
    }
}
