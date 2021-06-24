package com.example.hikana;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.GridView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        List<kana> kana = new ArrayList<>();
        GridView grid = findViewById(R.id.grid);
        String chara[] = {"a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta",
                "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo",
                "ya", "empty", "yo", "empty", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wi", "empty", "we", "wo", "n"};
        for (int i = 0; i != chara.length; i++) {
            kana.add(new kana(chara[i]));
        }

        adapter adapter = new adapter(this, kana);
        grid.setAdapter(adapter);
    }
}