package com.mime.mimefront;

import com.mime.mimefront.graphics.Render;
import com.mime.mimefront.graphics.Screen;

import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferStrategy;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferInt;

public class Display extends Canvas implements Runnable{

  public static final  int WIDTH = 800;
   public static final int HEIGHT = 600;
   public static final String TITLE = "MineFront Pre-Alpha-0.01";
   private Thread thread;
   private boolean running = false;

   private Render render;
   private Screen screen;
   private BufferedImage img;
   private int[] pixels;

   public Display() {
       screen = new Screen(WIDTH, HEIGHT);
       img = new BufferedImage( WIDTH, HEIGHT, BufferedImage.TYPE_INT_RGB);
       pixels = ((DataBufferInt) img.getRaster().getDataBuffer()).getData();
   }

   private void start() {

       if( running ) {
           return;
       }
       running = true;
       thread = new Thread( this );
       thread.start();
       System.out.println("Started Thread!!");
   }
   private void stop() {
       if( !running ) {
           return;
       }
       running = false;
       try {
           thread.join();
       } catch (Exception e) {
           e.printStackTrace();
           System.exit(0);
       }
   }

    public static void main(String[] args) {
        Display game = new Display();
        JFrame frame = new JFrame();

        frame.add(game);
        frame.pack();
        frame.setTitle( TITLE );
        frame.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE);
        frame.setSize( WIDTH, HEIGHT);
        frame.setLocationRelativeTo( null );
        frame.setResizable(false);
        frame.setVisible(true);

        game.start();


    }

    private void tick () {

    }
    private void render() {
        BufferStrategy bs = this.getBufferStrategy();
        if( bs == null ) {
            createBufferStrategy(3);
            return;
        }
       screen.render();
        System.arraycopy(screen.pixels, 0, pixels, 0, WIDTH * HEIGHT);

        Graphics g = bs.getDrawGraphics();
        g.drawImage(img, 0, 0, WIDTH , HEIGHT , null);
        g.dispose();
        bs.show();
    }

    @Override
    public void run() {
         while (running) {
             System.out.println("called the run");
             tick();
             render();
         }
    }
}
