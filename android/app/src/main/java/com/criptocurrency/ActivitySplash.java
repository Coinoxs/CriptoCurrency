package com.criptocurrency;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class ActivitySplash extends AppCompatActivity {

    ImageView imagea;
    ImageView imageb;
    ImageView imageicon;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        imagea = findViewById(R.id.a);
        imageb = findViewById(R.id.b);
        imageicon = findViewById(R.id.icon);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                startEnterAnimation();
            }
        }, 100 );


        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                startActivity(new Intent(ActivitySplash.this, MainActivity.class));
                finish();
            }
        }, 5000 );
    }




    private void startEnterAnimation() {

        imagea.startAnimation(AnimationUtils.loadAnimation(this, R.anim.imagea_out));
        imageb.startAnimation(AnimationUtils.loadAnimation(this, R.anim.imageb_in));
        imageb.setVisibility(View.VISIBLE);
        imagea.setVisibility(View.INVISIBLE);
        imageicon.setVisibility(View.VISIBLE);

    }


}
