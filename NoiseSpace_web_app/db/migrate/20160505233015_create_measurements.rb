class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.time :time
      t.date :date
      t.float :dB

      t.timestamps
    end
  end
end
